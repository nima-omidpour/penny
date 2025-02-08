import { Request } from "express";
import { Document } from "mongoose";
import { User } from "../models/User";

export interface AuthRequest extends Request {
  user?: {
    address: string;
  };
}

declare module "express" {
  interface Request {
    user?: User & Document;
  }
}
