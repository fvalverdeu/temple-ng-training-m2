export interface IPokemon {
  number: string;
  name: string;
  species: string;
  types: [
    string
  ];
  abilities: {
    normal: [
      string
    ];
    hidden: [
      string
    ]
  };
  eggGroups: [
    string
  ];
  gender: [number];
  height: string;
  weight: string;
  family: {
    id: number;
    evolutionStage: number;
    evolutionLine: [string]
  };
  starter: false;
  legendary: false;
  mythical: false;
  ultraBeast: false;
  mega: false;
  gen: number;
  sprite: string;
  description: string;
}
