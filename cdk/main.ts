import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const provider = new AwsProvider(this, "aws", {
      region: "us-east-1",
    });
    
    const instance = new Instance(this, 'existing-vpc', {
      ami: 'ami-0c55b159cbfafe1f0',
    });
  }
}

const app = new App();
new MyStack(app, "cdk");
app.synth();
