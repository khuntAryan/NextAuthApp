export default function Profile({ params }: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            profile page
            <p>profile of user
                <span>{params.id}</span>
            </p>
        </div>
    )
}