function Hero() {
    return (
      <div className="card p-4 shadow-sm mb-5">
        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <h1 className="display-6 fw-bold">
              Atomic Habits: Perubahan Kecil yang memberikan hasil luar biasa.
            </h1>
            <p className="text-muted">
              Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk
            </p>
            <div className="d-flex gap-2">
              <button className="btn btn-primary">Buy Now</button>
              <button className="btn btn-outline-secondary">Detail</button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/wFF_WzeAIK8Ec848_Jnf19U9yIIIqsIYXJE3s1kgQOM.jpg"
              alt="Atomic Habits Cover"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    )
  }
  
  export default Hero
  