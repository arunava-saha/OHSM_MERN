import Property from "../models/property.js";
import Inventory from "../models/inventory.js";

export const home = async (req, res, next) => {
  try {
    let Properties = await Property.find({});
    return res.status(201).json({ Properties });
  } catch (error) {
    next(err);
  }
};

export const CreateProperties = async (req, res, next) => {
  try {
    // const { id } = req.user;
    const task = new Property({ ...req.body });
    const saveTask = await task.save();
    return res.status(201).json({ data: saveTask });
  } catch (err) {
    next(err);
  }
};

export const property = async (req, res, next) => {
  try {
    let property = await Property.findById(req.params.id).populate({
      path: "Inventory",
    });
    if (property) {
      return res.status(201).json({ property });
    }
    return res.status(401).json({ error: "Not Found" });
  } catch (err) {
    next(err);
  }
};
export const Myproperty = async (req, res, next) => {
  try {
    let property = await Property.find({ email: req.params.email });

    if (property) {
      return res.status(201).send(property);
    }
    return res.status(401).json({ error: "Not Found" });
  } catch (err) {
    next(err);
  }
};

export const createInventory = async (req, res, next) => {
  try {
    let property = await Property.findById(req.params.id);
    if (property) {
      console.log(req.body);
      let inventory = await Inventory.create({ ...req.body });
      property.Inventory.push(inventory);
      await property.save();
      return res.status(201).json({ property });
    }
    return res.status(201).json({ error: "Error" });
  } catch (err) {
    next(err);
  }
};
