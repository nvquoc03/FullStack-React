class CommonUtils {
    static getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader(); //-->API của HTML
            reader.readAsDataURL(file); //--> Đọc và chuyển thành dạng base64
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
}

export default CommonUtils;