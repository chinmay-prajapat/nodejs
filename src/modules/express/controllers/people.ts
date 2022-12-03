import { Request, Response } from "express";
import { people } from "../../../data/Data";

const getPeople = (req: Request, res: Response): void => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req: Request, res: Response): void => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ success: false, msg: "please provide name" });
  }
  //   const newArr=[...people,peo

  let newArr = people;
  newArr = [...newArr, { id: people[people.length - 1].id + 1, name }];
  res.status(201).json({ success: true, person: newArr });
};

const createPersonPostman = (req: Request, res: Response): void => {
  const { name } = req.body;
  if (!name) {
    res.status(4000).json({ success: false, msg: "Please provide name value" });
  }

  res.status(201).json({ success: true, data: [...people, { id: 6, name }] });
};

const updatePerson = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { name } = req.body;
  const filtered = people.find((i) => i.id === Number(id));

  if (!filtered) {
    res.status(400).json({ success: false, msg: "please provide a valid id" });
  }
  const newPeople = people.map((i) => {
    if (i.id === Number(id)) {
      i.name = name;
    }
    return i;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req: Request, res: Response): void => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));

  if (person) {
    const newPeople = people.filter((i) => i.id !== Number(id));
    res.status(200).json({ suuccess: true, data: newPeople });
  }
  res.status(404).json({ success: false, msg: "id not found" });
};

export {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson
};
