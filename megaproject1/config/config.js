const config={
    appWriteURL:String(import.meta.env.VITE_APPWRITE_URL),
    appWriteDatabaseID:String(import.meta.env.VITE_DATABASE_ID),
    appWriteCollectionID:String(import.meta.env.VITE_COLLECTION_ID),
    appWriteBucketID:String(import.meta.env.VITE_BUCKET_ID),
    appWriteProjectID:String(import.meta.env.VITE_PROJECT_ID)
}
export default  config