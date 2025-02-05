import express from "express";
import { ethers } from "ethers";
import jwt from "jsonwebtoken";

const router = express.Router();

// Store nonces in memory (consider using Redis in production)
const nonces = new Map<string, string>();

router.post("/nonce", (req, res) => {
  const { address } = req.body;
  const nonce = Math.floor(Math.random() * 1000000).toString();
  nonces.set(address.toLowerCase(), nonce);
  res.json({ nonce: `Please sign this nonce to verify your wallet: ${nonce}` });
});

router.post("/verify", async (req, res) => {
  const { address, signature } = req.body;
  const nonce = nonces.get(address.toLowerCase());

  if (!nonce) {
    return res.status(400).json({ message: "Please request a nonce first" });
  }

  try {
    const signerAddress = ethers.verifyMessage(
      `Please sign this nonce to verify your wallet: ${nonce}`,
      signature
    );

    if (signerAddress.toLowerCase() !== address.toLowerCase()) {
      return res.status(401).json({ message: "Invalid signature" });
    }

    const token = jwt.sign(
      { address: address.toLowerCase() },
      process.env.JWT_SECRET!,
      { expiresIn: "24h" }
    );

    nonces.delete(address.toLowerCase());
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: "Invalid signature" });
  }
});

export default router;
