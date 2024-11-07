function RowSkill(props: any) {
    // Function to generate stars based on level
    const renderStars = (level: number) => {
      let stars = [];
      for (let i = 0; i < 5; i++) {
        if (i < level) {
          stars.push(<span key={i} className="text-yellow-500">⭐</span>);
        } else {
          stars.push(<span key={i} className="text-gray-300">⭐</span>);
        }
      }
      return stars;
    };
  
    return (
    <div className="border-2 border-indigo-500/75 rounded-lg bg-[#E0F7FA] p-2 my-5 text-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4">{props.skill}</div>
            <div className="col-span-12 md:col-span-8">
              {renderStars(props.level)}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default function SkillSet() {
    return (
      <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">Skills</h2>
        <RowSkill skill="HTML" level={4} />
        <RowSkill skill="CSS" level={3} />
        <RowSkill skill="JavaScript" level={4} />
        <RowSkill skill="React" level={3} />
        <RowSkill skill="FoxPro" level={5} />
      </div>
    );
  }
  