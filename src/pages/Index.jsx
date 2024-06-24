import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

function Index() {
  const [parlorName, setParlorName] = useState("");
  const [parlorLocation, setParlorLocation] = useState("");
  const [parlors, setParlors] = useState([]);

  const handleAddParlor = () => {
    if (parlorName && parlorLocation) {
      setParlors([...parlors, { name: parlorName, location: parlorLocation }]);
      setParlorName("");
      setParlorLocation("");
      toast.success("Ice cream parlor added successfully!");
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ice Cream Parlor Management</h1>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Add New Parlor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="parlorName">Parlor Name</Label>
            <Input
              id="parlorName"
              value={parlorName}
              onChange={(e) => setParlorName(e.target.value)}
              placeholder="Enter parlor name"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="parlorLocation">Parlor Location</Label>
            <Input
              id="parlorLocation"
              value={parlorLocation}
              onChange={(e) => setParlorLocation(e.target.value)}
              placeholder="Enter parlor location"
            />
          </div>
          <Button onClick={handleAddParlor}>Add Parlor</Button>
        </CardContent>
      </Card>
      <h2 className="text-xl font-semibold mb-2">Parlor List</h2>
      {parlors.length > 0 ? (
        parlors.map((parlor, index) => (
          <Card key={index} className="mb-2">
            <CardContent>
              <h3 className="text-lg font-bold">{parlor.name}</h3>
              <p>{parlor.location}</p>
            </CardContent>
          </Card>
        ))
      ) : (
        <p>No parlors added yet.</p>
      )}
    </div>
  );
}

export default Index;