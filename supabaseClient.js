<script type="module">
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://blefcapivbvswutesdsc.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
</script>
