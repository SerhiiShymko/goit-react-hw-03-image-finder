// async function submitSearchForm(event) {
//   event.preventDefault();
//   searchQuery = event.currentTarget.searchQuery.value.trim();
//   currentPage = 1;

//   if (searchQuery === '') {
//     Notify.warning('Please, fill the main field');
//     return;
//   }

//   const response = await getImages(searchQuery, currentPage);
//   currentHits = response.hits.length;

//   if (response.totalHits > 40) {
//     refs.btnLoad.classList.remove('is-hidden');
//   } else {
//     refs.btnLoad.classList.add('is-hidden');
//   }

//   try {
//     if (response.totalHits > 0) {
//       Notify.success(`Hooray! We found ${response.totalHits} images.`);
//       refs.galleryItems.innerHTML = '';
//       onRenderGallery(response.hits);
//       lightbox.refresh();
//       refs.textCollections.classList.add('is-hidden');
//     }
//     if (response.totalHits === 0) {
//       refs.galleryItems.innerHTML = '';
//       Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//       refs.btnLoad.classList.add('is-hidden');
//       refs.textCollections.classList.add('is-hidden');
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
