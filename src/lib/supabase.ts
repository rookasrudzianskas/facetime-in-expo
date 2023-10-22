import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://izhyhtedfukdnoruqdza.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6aHlodGVkZnVrZG5vcnVxZHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5NjQ5NDgsImV4cCI6MjAxMzU0MDk0OH0.uQ23QDfJHV0K5f5s0wVaf2o7K_EioAPCHb5JNB0RUF8"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
