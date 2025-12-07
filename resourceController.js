import Resource from "../models/resourceModel.js";


// ➕ Add a resource  
export const addResource = async (req, res) => {
  try {
    const resource = await Resource.create({
      ...req.body,
      createdBy: req.user._id
    });
    res.status(201).json(resource);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📌 Get all resources of logged-in user
export const getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find({ createdBy: req.user._id });
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔎 Get single resource
export const getResource = async (req, res) => {
  try {
    const resource = await Resource.findOne({
      _id: req.params.id,
      createdBy: req.user._id
    });

    if (!resource) return res.status(404).json({ message: "Not found" });

    res.json(resource);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✏ Update resource
export const updateResource = async (req, res) => {
  try {
    const resource = await Resource.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user._id },
      req.body,
      { new: true }
    );

    if (!resource) return res.status(404).json({ message: "Not found" });

    res.json(resource);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🗑 Delete Resource
export const deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id
    });

    if (!resource) return res.status(404).json({ message: "Not found" });

    res.json({ message: "Resource deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
