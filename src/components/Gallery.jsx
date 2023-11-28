import "./Gallery.css";

function Gallery(props) {
  const { data, title } = props;

  return (
    <section id="gallery-section" className="section">
      <h1>{title}</h1>
      <p>Click a picture to add it to your favorites.</p>
      <div id="gallery-images">
        {data.map((img) => (
          <img
            key={img.key}
            className="gallery-img"
            src={img.url}
            alt={img.altText}
            tabIndex="0"
            role="button"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
