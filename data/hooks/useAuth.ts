import { useAtom } from "jotai";
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import AsyncStorage from '@react-native-async-storage/async-storage'

const storage = createJSONStorage(() => AsyncStorage)
const authTokenAtom = atomWithStorage<any>('auth-token', undefined, storage)

const useAuth = () => {
  const [authToken, setAuthToken] = useAtom(authTokenAtom);

  const login = async (email: string, password: string) => {
    setAuthToken("blah");
  };

  const logout = async () => {
    setAuthToken(undefined);
  }

  return { authToken, login, logout };
}

export { useAuth }