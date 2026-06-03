function Team() {
    const teamMembers = [
      {
        name: "A. Nasikh Zainal",
        role: "Frontend Developer",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
      },
      {
        name: "Sarah Nurul",
        role: "UI/UX Designer",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
      },
      {
        name: "Fajar Kurniawan",
        role: "Backend Engineer",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
      },
    ];
  
    return (
      <section className="my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Team</h2>
          <p className="text-muted">Meet the awesome people behind this project.</p>
        </div>
        <div className="row g-4">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="col-md-4">
              <div className="card text-center shadow-sm p-3 h-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-circle mx-auto mb-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <h5 className="fw-bold">{member.name}</h5>
                <p className="text-muted mb-0">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Team;
  