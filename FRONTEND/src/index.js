import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import Game from './board/game.js'
import styles from './index.module.scss'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StrictMode>

      <div className={styles.board}>
          <Game></Game>
      </div>
    </StrictMode>


);


