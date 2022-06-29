import "../css/components.css";

const Social = () => {
  return (
    <div className="social">
      <div className="contacts">
        <p>
          <strong>Phone:</strong> +254 725 131 828 or <strong>Email:</strong>
          kitakayaloisa@gmail.com
        </p>
      </div>
      <div className="social-media">
        <a href="#">
          <i className="bi bi-facebook fs-5 text-link"></i>
        </a>
        <a href="#">
          <i className="bi bi-twitter fs-5 text-info"></i>
        </a>
        <a href="#">
          <i class="bi bi-instagram fs-5 text-danger"></i>
        </a>
        <a href="#">
          <i class="bi bi-linkedin fs-5 text-dark"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;
