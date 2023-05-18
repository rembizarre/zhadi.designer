import GalleryComp from '../components/Gallery/GalleryComp';

export default function Gallery({ useSetIsContact }) {
  // to show Footer or not
  useSetIsContact(false);

  // getting required type of portfolio and passing it to GalleryComp
  const typeName = +window.location.pathname.split('/').pop();
  return <GalleryComp typeId={typeName} />;
}
