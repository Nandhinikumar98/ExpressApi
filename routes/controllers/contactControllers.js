//@desc Get all contact
//@route Get /api/contact
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ messgae: "Get all contact" });
};

//@desc create new contact
//@route post /api/contact
//@access public
const createContact = (req, res) => {
  console.log(req.body);
  const { Name, Age } = req.body;
  if (!Name || !Age) {
    res.status(400);
    throw new Error("All fields are mandatory !!");
  }
  res.status(201).json({ messgae: "Create all contact" });
};

//@desc Get  contact
//@route Get /api/contact/id
//@access public
const getcontact = (req, res) => {
  res.status(200).json({ messgae: `Get contact for ${req.params.id}` });
};

//@desc Update  contact
//@route Put /api/contact/id
//@access public
const Updatecontact = (req, res) => {
  res.status(200).json({ messgae: `Update contact for ${req.params.id}` });
};

//@desc Delete  contact
//@route Delete /api/contact/id
//@access public
const Deletecontact = (req, res) => {
  res.status(200).json({ messgae: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getcontact,
  getContacts,
  createContact,
  Updatecontact,
  Deletecontact,
};
