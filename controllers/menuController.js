const MenuItems = require("../db/models/menuItems.js");

const getAll = async (req, res) => {
  try {
    const menu = await MenuItems.getAll();
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOne = async (req, res) => {
  try {
    const menu = await MenuItems.getOne(req.params.id);
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const create = async (req, res) => {
  try {
    const menu = await MenuItems.create(req.body);
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    updateData.updatedAt = new Date();

    const options = { new: true };

    const updatedMenu = await MenuItems.update(id, updateData, options);

    if (!updatedMenu) {
      return res.status(404).send("Menu item not found");
    }
    return res.status(200).send(updatedMenu);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteMenu = async (req, res) => {
  try {
    const deletedMenu = await MenuItems.deleteMenu(req.params.id);
    return res.status(200).send(deletedMenu.id);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { getAll, getOne, create, update, deleteMenu };
