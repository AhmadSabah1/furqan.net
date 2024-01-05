export default function page({ params }: { params: { reading: string } }): React.JSX.Element {
    const { reading } = params
    return <div>
        {`from ${reading}!`}
    </div>
}