import express from "express";
import { ethers } from "ethers";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import { Router } from "express";

const router = Router();

// Store nonces in memory (consider using Redis in production)
const nonces = new Map<string, string>();

// Nonce endpoint
router.post("/nonce", async (req, res) => {
  try {
    const { address } = req.body;

    if (!address) {
      return res.status(400).json({
        error: "Address is required",
      });
    }

    // Generate a random nonce
    const nonce = Math.floor(Math.random() * 1000000).toString();

    // Update or create user with new nonce
    await User.findOneAndUpdate(
      { walletAddress: address.toLowerCase() },
      {
        walletAddress: address.toLowerCase(),
        nonce,
        $setOnInsert: { createdAt: new Date() },
      },
      { upsert: true }
    );

    // Send the response
    res.json({
      nonce: `Please sign this nonce to verify your wallet: ${nonce}`,
      address,
    });
  } catch (error) {
    console.error("Nonce generation error:", error);
    res.status(500).json({
      error: "Failed to generate nonce",
    });
  }
});

router.post("/verify", async (req, res) => {
  try {
    const { address, signature } = req.body;

    // Find user and their nonce
    const user = await User.findOne({ walletAddress: address.toLowerCase() });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Verify signature
    const signerAddress = ethers.verifyMessage(
      `Please sign this nonce to verify your wallet: ${user.nonce}`,
      signature
    );

    if (signerAddress.toLowerCase() !== address.toLowerCase()) {
      return res.status(401).json({ error: "Invalid signature" });
    }

    // Generate new nonce for next login
    const newNonce = Math.floor(Math.random() * 1000000).toString();

    // Update user's nonce and last login
    await User.updateOne(
      { walletAddress: address.toLowerCase() },
      {
        nonce: newNonce,
        lastLoginAt: new Date(),
      }
    );

    // Generate JWT token
    const token = jwt.sign(
      {
        address: address.toLowerCase(),
        role: user.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "24h" }
    );

    res.json({ token });
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({ error: "Failed to verify signature" });
  }
});

export default router;
