


export const handle = async (event) => {

    return {
        statusCode: 201,
        body: JSON.stringify({
            message: "Hello Serverless"
        }),
        headers: {
            "Content-Type": "application/json",
        },
    }
}
