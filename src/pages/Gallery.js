import GalleryComp from '../components/Gallery/GalleryComp';

export default function Gallery() {

  // getting required type of portfolio and passing it to GalleryComp
  const typeName = +window.location.pathname.split('/').pop();
  return <GalleryComp typeId={typeName} />;
}
