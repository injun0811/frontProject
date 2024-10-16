const ProductShowImg = (model, category, color, imgCntArr, selectCol) => {
    const imgUrl = [];
    const modelPath = model.substring(0, 11);
    const imgfileName = model.substring(3, 17);
    let defaultPath = '/images/products';
    if (color.length === 1) {
        imgCntArr.map((img) => {
            imgUrl[img] = `${defaultPath}/${category}/${modelPath}/${imgfileName}_0${img + 1}.webp`;
        })
    } else if (color.length > 1) {
        imgCntArr.map((img) => {
            imgUrl[img] = `${defaultPath}/${category}/${modelPath}/${selectCol}/${imgfileName}_0${img + 1}.webp`;
        })
    }

    return imgUrl;
};

export default ProductShowImg;
