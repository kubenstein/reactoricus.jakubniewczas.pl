import { v2 as cloudinary } from 'cloudinary';
import GameMap from 'lib/models/game-map';

export default function addMapPreview({ id, mapPreviewPath }) {
  return cloudinary.uploader.upload(mapPreviewPath)
    .then(({ url, public_id }) => GameMap.update( // eslint-disable-line babel/camelcase
      { imgUrl: url, cloudinaryPublicId: public_id },
      { where: { id } },
    ));
}
