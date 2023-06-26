const express = require("express");
const router = express.Router();
const {
  getcontact,
  createContact,
  getContacts,
  Updatecontact,
  Deletecontact,
} = require("./controllers/contactControllers");

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getcontact).put(Updatecontact).delete(Deletecontact);

module.exports = router;
