import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserList from './components/UserList';

// Layout things i put here
function App() {
  return(
    
    <div>
      <Header />

       <main className="main">
          <UserList />
       </main>

      <Footer />
    </div>
  );
}

export default App
