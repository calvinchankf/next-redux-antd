// components
import Header from "components/Header";
import Footer from "components/Footer";
import { Select } from "antd";
const { Option } = Select;
// page component

export default () => (
	<div>
		<Header />
		<div>Hi there</div>
		<Footer />
		<Select defaultValue="lucy" style={{ width: 120 }} onChange={() => {}}>
			<Option value="jack">Jack</Option>
			<Option value="lucy">Lucy</Option>
			<Option value="disabled" disabled>
				Disabled
			</Option>
			<Option value="Yiminghe">yiminghe</Option>
		</Select>
		<Select defaultValue="lucy" style={{ width: 120 }} disabled>
			<Option value="lucy">Lucy</Option>
		</Select>
		<Select defaultValue="lucy" style={{ width: 120 }} loading>
			<Option value="lucy">Lucy</Option>
		</Select>
	</div>
);
