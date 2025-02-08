import express from "express";
import { User, TeamMember } from "../models/User";
import { authenticate } from "../middleware/auth";

const router = express.Router();

// Create team member
router.post("/", authenticate, async (req, res) => {
  try {
    const { name, profileImage, role, salary } = req.body;
    const userId = req.user._id;

    const newMember = new TeamMember({
      name,
      profileImage,
      role,
      salary,
      createdBy: userId,
    });

    await newMember.save();

    // Add to user's team
    await User.findByIdAndUpdate(userId, {
      $push: { team: newMember._id },
    });

    res.status(201).json(newMember);
  } catch (error) {
    console.error("Error creating team member:", error);
    res.status(500).json({ error: "Failed to create team member" });
  }
});

// Get all team members
router.get("/", authenticate, async (req, res) => {
  try {
    const userId = req.user._id;
    const teamMembers = await TeamMember.find({ createdBy: userId });
    res.json(teamMembers);
  } catch (error) {
    console.error("Error fetching team members:", error);
    res.status(500).json({ error: "Failed to fetch team members" });
  }
});

// Update team member
router.put("/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, profileImage, role, salary } = req.body;
    const userId = req.user._id;

    const updatedMember = await TeamMember.findOneAndUpdate(
      { _id: id, createdBy: userId },
      { name, profileImage, role, salary },
      { new: true }
    );

    if (!updatedMember) {
      return res.status(404).json({ error: "Team member not found" });
    }

    res.json(updatedMember);
  } catch (error) {
    console.error("Error updating team member:", error);
    res.status(500).json({ error: "Failed to update team member" });
  }
});

// Delete team member
router.delete("/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    // Remove from user's team array
    await User.findByIdAndUpdate(userId, {
      $pull: { team: id },
    });

    // Delete the team member
    await TeamMember.findOneAndDelete({ _id: id, createdBy: userId });

    res.json({ message: "Team member deleted successfully" });
  } catch (error) {
    console.error("Error deleting team member:", error);
    res.status(500).json({ error: "Failed to delete team member" });
  }
});

export default router;
