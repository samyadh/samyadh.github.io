import styles from './app.module.scss';
import 'tailwindcss/tailwind.css';

export function App() {
  return (
    <div className={styles.app}>
      <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
        Click me
      </button>
      <button className="btn btn-green">Button</button>
    </div>
  );
}

export default App;
