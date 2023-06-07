import Stack from "@mui/material/Stack";
import {Card, Skeleton} from "@mui/material";

const SkeletonTasks = ({num}) => {
    return (
        <Stack spacing={2}>
            {Array.from(new Array(num)).map((item, index) => (
                <Card key={index}>
                    <Skeleton  variant="rectangular" width={345} height={125} mb={2}/>
                </Card>
            ))}
        </Stack>

    );
};

export default SkeletonTasks;
