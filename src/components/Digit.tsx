import { digitToOrientations } from '../common/utils';
import Cell from './Cell';

type Props = {
    value: number;
};

const Digit = (props: Props) => {
    const { value } = props;
    const orientations = digitToOrientations[value];

    return (
        <div className="flex flex-col gap-0.5">
            <div className="flex gap-0.5">
                <Cell direction={orientations[0]}></Cell>
                <Cell direction={orientations[1]}></Cell>
                <Cell direction={orientations[2]}></Cell>
                <Cell direction={orientations[3]}></Cell>
            </div>
            <div className="flex gap-0.5">
                <Cell direction={orientations[4]}></Cell>
                <Cell direction={orientations[5]}></Cell>
                <Cell direction={orientations[6]}></Cell>
                <Cell direction={orientations[7]}></Cell>
            </div>
            <div className="flex gap-0.5">
                <Cell direction={orientations[8]}></Cell>
                <Cell direction={orientations[9]}></Cell>
                <Cell direction={orientations[10]}></Cell>
                <Cell direction={orientations[11]}></Cell>
            </div>
            <div className="flex gap-0.5">
                <Cell direction={orientations[12]}></Cell>
                <Cell direction={orientations[13]}></Cell>
                <Cell direction={orientations[14]}></Cell>
                <Cell direction={orientations[15]}></Cell>
            </div>
            <div className="flex gap-0.5">
                <Cell direction={orientations[16]}></Cell>
                <Cell direction={orientations[17]}></Cell>
                <Cell direction={orientations[18]}></Cell>
                <Cell direction={orientations[19]}></Cell>
            </div>
            <div className="flex gap-0.5">
                <Cell direction={orientations[20]}></Cell>
                <Cell direction={orientations[21]}></Cell>
                <Cell direction={orientations[22]}></Cell>
                <Cell direction={orientations[23]}></Cell>
            </div>
        </div>
    );
};

export default Digit;
