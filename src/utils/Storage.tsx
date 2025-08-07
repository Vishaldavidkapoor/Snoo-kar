import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key: string, value: any): Promise<void> => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        // handle error
        console.error('Error setting item in AsyncStorage', e);
    }
};

export const getItem = async <T = any>(key: string): Promise<T | null> => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) as T : null;
    } catch (e) {
        // handle error
        console.error('Error getting item from AsyncStorage', e);
        return null;
    }
};