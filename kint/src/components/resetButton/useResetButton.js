import { KEYS } from '../../constants/localStorageKey';

export const ResetData = () => {
  const consent = window.confirm('localStorage の打刻データを削除しますか？');
  if (consent) {
    KEYS.map((key) => (
      localStorage.removeItem(key.id)
    ))
    window.location.reload();
  }
}
