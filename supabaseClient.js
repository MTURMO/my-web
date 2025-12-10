import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Les teves credencials Supabase
const SUPABASE_URL = 'https://blefcapivbvswutesdsc.supabase.co';
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsZWZjYXBpdmJ2c3d1dGVzZHNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3NTczNTksImV4cCI6MjA3NTMzMzM1OX0.K0RlQYKfY3lfFa3Noi5Og7QBRSfhT7S3u7SJrp_nJxk";

// Crea el client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Funció de prova: agafa totes les files d'una taula de prova
async function testSupabase() {
    const { data, error } = await supabase.from('test_table').select('*');

    if (error) {
        console.error('Error accedint a Supabase:', error);
    } else {
        console.log('Dades rebudes de Supabase:', data);
    }
}

// Executa la funció
testSupabase();
