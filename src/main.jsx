
import { createRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/react";

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './styles/index.css'


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <div>
        <App />
        <Analytics />
    </div>

)
