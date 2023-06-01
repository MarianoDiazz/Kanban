import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "📋 Por hacer",
    task: [
      {
        id: uuidv4(),
        title: "Estudiar"
      },
      {
        id: uuidv4(),
        title: "Caminar"
      },
      {
        id: uuidv4(),
        title: "Codear"
      }
    ]
  },
  {
    id: uuidv4(),
    title: "⚒️ En progreso",
    task: [
      {
        id: uuidv4(),
        title: "Merendar"
      },

      {
        id: uuidv4(),
        title: "Programar"
      }
    ]
  },
  {
    id: uuidv4(),
    title: "✔️ Terminado",
    task: [
      {
        id: uuidv4(),
        title: "Bañito"
      }
    ]
  }
];

export default mockData;
