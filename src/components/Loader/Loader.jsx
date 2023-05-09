// async function clickBtnLoad() {
//   currentPage += 1;
//   const response = await getImages(searchQuery, currentPage);
//   onRenderGallery(response.hits);
//   lightbox.refresh();
//   currentHits += response.hits.length;

//   const { height: cardHeight } = document
//     .querySelector('.gallery')
//     .firstElementChild.getBoundingClientRect();

//   window.scrollBy({
//     top: cardHeight * 2,
//     behavior: 'smooth',
//   });

//   if (currentHits === response.totalHits) {
//     refs.btnLoad.classList.add('is-hidden');
//     refs.textCollections.classList.remove('is-hidden');
//   }
// }

// import { MdOutlineCameraswitch } from 'react-icons/md';
// import css from './Loader.module.css';

// function Loader() {
//   return (
//     <div className={css.wrapper}>
//       <MdOutlineCameraswitch className={css.loader} />
//     </div>
//   );
// }

// export default Loader;
