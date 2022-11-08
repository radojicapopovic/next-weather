import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Paper, TextInput, Button, Text, Group } from "@mantine/core";
import { useState } from "react";

const API_KEY = "946ff3bdd705ba6c6eb475fe12bb12e7";

export default function Home() {
  const [cityInput, setCityInput] = useState("");

  async function getWeatherData() {}

  return (
    <div
      style={{
        position: "static",
        height: "100vh",
        backgroundImage:
          "url('https://littlevisuals.co/images/atlantic_ridge.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Paper withBorder p="lg" style={{ maxWidth: "500px" }}>
          <Group position="apart">
            <Text size="xl" weight="400">
              Get The Weather
            </Text>
          </Group>
          <Group position="apart">
            <Text size="lg">Enter a city, and get the weather below!</Text>
          </Group>
          <Group position="apart" mb="xs">
            <TextInput
              label="City Name"
              placeholder="ex: Belgrade"
              onChange={(e) => setCityInput(e.target.value)}
            />
          </Group>
          <Group position="apart">
            <Button
              variant="gradient"
              size="md"
              onClick={() => getWeatherData()}
            >
              Get Weather
            </Button>
          </Group>
        </Paper>
      </div>
    </div>
  );
}
