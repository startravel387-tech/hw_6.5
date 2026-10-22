interface StorageItem<T> {
  key: string;
  value: T;
  timestamp: number;
}

function createCacheItem<T>(key: string, value: T): StorageItem<T> {
  return {
    key,
    value,
    timestamp: Date.now(),
  };
}

interface Settings {
  theme: string;
  language: string;
}

export const Generics = () => {
  const counterCache = createCacheItem<number>('counter', 10);
  const settingsCache = createCacheItem<Settings>('userSettings', {
    theme: 'dark',
    language: 'ru',
  });

  return (
    <div style={{ padding: '15px', border: '1px solid #ccc', marginBottom: '10px' }}>
      <h3>Задание 1: Дженерики</h3>
      <p><b>Counter:</b> {JSON.stringify(counterCache)}</p>
      <p><b>Settings:</b> {JSON.stringify(settingsCache)}</p>
    </div>
  );
};