import express from "express";

import {
  createPerson,
  createPersonPostman,
  deletePerson,
  getPeople,
  updatePerson,
} from "../controllers/people";

const router = express.Router();
// router.get("/", getPeople);

// router.post("/", createPerson);

// router.post("/postman", createPersonPostman);

// router.put("/:id", updatePerson);

// router.delete("/:id", deletePerson);

// Another way to routing

router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

export default router;
