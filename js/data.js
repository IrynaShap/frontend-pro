'use strict';

function createDataBase() {
    const OBJECT_KEYS = ['firstName', 'lastName', 'phone'];
    const STORAGE_KEY = 'phoneBookDB';

    const validateObject = (objectToValidate) => {
        if (typeof objectToValidate !== 'object') return false;
        const keysToValidate = Object.keys(objectToValidate);

        let isValid = true;

        for (let i = 0; i < OBJECT_KEYS.length; i++) {

            if (!keysToValidate.includes(OBJECT_KEYS[i])) {
                isValid = false;
                break;
            }

        }
        return isValid;
    };

    const getData = () => {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    };

    const setData = (data) => {
        // Object validation
        if (!data) return null;

        if (typeof data !== "object") return null;

        if (!validateObject(data)) return null;

        // Generate uniq ID
        let id = 1;
        const currentData = getData();
        if (currentData.length > 0) {
            id = currentData[currentData.length - 1].id + 1;
        }

        // Save data to database;
        const dataToSave = { ...data, id };
        const updatedData = [...currentData, dataToSave];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));

        // return saved element
        return dataToSave;
    };

    const deleteData = ({ id }) => {
        if (typeof id !== 'number') return null;
        const currentData = getData();

        const userIndex = currentData.findIndex((singleUser) => id === singleUser.id);
        if (userIndex === -1) return null;

        const deletedUser = currentData.splice(userIndex, 1)[0];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));

        return deletedUser;
    };

    return {
        getData,
        setData,
        deleteData,
    };
}

const dataBase = createDataBase();