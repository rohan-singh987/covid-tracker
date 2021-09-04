import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core"

function InfoBox({ title, cases, total }) {
    return (
        <Card className="infoBox">
            <CardContent>
                {/* title i.e-> Coronavirus */}
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>

                {/* cases-> 6.28 lac */}
                <h2 className="infoBox__cases">{cases}</h2>

                {/* total -> 21.6 cr */}
                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
