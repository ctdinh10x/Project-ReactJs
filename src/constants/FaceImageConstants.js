export default {
    FaceImageStatusEnums: {
        GetData: 0,
        Loading: 1,
        Checked: 2,
        Error: 3
    },
    Error: {
        "001": "INVALID",
        "002": "CROP",
        "003": "POSE",
        "004": "SMALL",
        "005": "BLUR",
        "006": "OCCLUSION",
        "007": "MASK",
        "008": "SAME",
        "009": "EXITED",
    },
    FaceQualityError: {
        '001': 'Invalid image',
        '002': 'Can not recognize face',
        '003': 'Face angle is incorrect',
        '004': 'Face image is too small',
        '005': 'Blurred image',
        '006': 'Face is hidden',
        '007': 'Wearing a mask',
        '008': 'The image is not the same person',
        '009': 'User already exists with similarity',
        '010': 'The image is dark',
        '011': 'No image file',
        '012': 'Limited file size',
        '013': 'Invalid file type',
    }
}