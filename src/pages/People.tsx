import React from "react";
import researchTeam from "../json/researchTeam.json"
import advisoryBoard from "../json/advisoryBoard.json"

interface Person {
  id: number;
  name: string;
  imageUrl: string;
  affiliation: string;
  website?: string;
}


const People: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "'Roboto Mono', monospace",
      }}
      className="mx-auto flex flex-col space-y-6"
    >
      
      <div>
        <h2 className="text-4xl mb-2">Session #1: </h2>
        <div className="outline rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {advisoryBoard.map((person, idx) => (
            <PersonPortrait person={{...person, id: idx + 100}} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl mb-2">Session #2: </h2>
        <div className="outline rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {advisoryBoard.map((person, idx) => (
            <PersonPortrait person={{...person, id: idx + 100}} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl mb-2">Session #3: </h2>
        <div className="outline rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {advisoryBoard.map((person, idx) => (
            <PersonPortrait person={{...person, id: idx + 100}} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl mb-2">Session #4: </h2>
        <div className="outline rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {advisoryBoard.map((person, idx) => (
            <PersonPortrait person={{...person, id: idx + 100}} />
          ))}
        </div>
      </div>
      

      <div className="">
        <h2 className="text-4xl mb-2">research team</h2>
        <div className="outline rounded-lg mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {researchTeam.map((person, idx) => (
            <PersonPortrait person={{...person, id: idx + 200}} />
          ))}
        </div>
      </div>
    </div>
    
  );
};

const PersonPortrait: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <a
      id="people-portrait"
      target="_blank"
      href={person.website}
      key={person.id}
      className="px-2 py-4 text-sm flex flex-col items-center cursor-pointer hover:underline rounded-lg group"
    >
      <img
        id="people-portrait"
        src={person.imageUrl}
        alt={person.name}
        className="w-32 h-32 rounded-full object-cover cursor-pointer group-hover:outline group-hover:outline-4 group-hover:outline-[#ffcc04] "
      />
      <p className="mt-4 text-lg font-semibold">{person.name}</p>
      <p className="text-md">{person.affiliation}</p>
    </a>
  );
};

export default People;
