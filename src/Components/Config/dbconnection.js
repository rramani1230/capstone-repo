import { createClient } from '@supabase/supabase-js' // import the createClient function 
//from the supabase-js library

// use the authentication params stored in the .env file and store them in variables
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_ANON_KEY

// create a new client using the createClient function and pass in the url and key
const supabase = createClient(supabaseUrl, supabaseKey)

// export the client so it can be used in other files
export default supabase