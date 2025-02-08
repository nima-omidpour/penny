import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import { ethers } from "ethers";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ error: "Authentication required" });
    }

    console.log(process.env.JWT_SECRET);
    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      address: string;
      nonce: string;
      signature: string;
    };

    // Find user in database
    const user = await User.findOne({
      walletAddress: decoded.address.toLowerCase(),
    });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    // Verify the signature
    const signerAddress = ethers.verifyMessage(
      `Please sign this nonce to verify your wallet: ${user.nonce}`,
      decoded.signature
    );

    if (signerAddress.toLowerCase() !== decoded.address.toLowerCase()) {
      return res.status(401).json({ error: "Invalid signature" });
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ error: "Invalid token" });
  }
};
