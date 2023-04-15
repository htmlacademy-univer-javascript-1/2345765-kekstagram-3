

const getPictures = function (onSuccess) {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((pictures) => onSuccess(pictures));
};

const uploadPicture = function(body, onSuccess, onFail, onFinal) {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
      body: body
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail())
    .finally(onFinal());
};

export {getPictures, uploadPicture};


