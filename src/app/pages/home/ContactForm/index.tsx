import {
    Box,
    Flex,
    Text,
    Input,
    Field,
    Select,
    Portal,
    Button,
    VStack,
    Heading,
    Textarea,
    createListCollection,
} from "@chakra-ui/react";
import { useContactForm } from "./hooks-contact-form/use-contact-form";


const services = createListCollection({
    items: [
        { label: "Quero marcar uma consulta", value: "marcar uma consulta" },
        { label: "Quero saber mais sobre psicoterapia", value: "saber mais sobre psicoterapia" },
        { label: "Quero saber mais sobre hipnoterapia", value: "saber mais sobre hipnoterapia" },
        { label: "Prefiro falar diretamente com o profissional", value: "falar diretamente consigo" }
    ]
})

export function ContactForm() {
    const { name, message, setName, setReason, setMessage, hasConsent, setHasConsent, handleSubmit } = useContactForm()

    return (
        <Flex id="contact-form-section" flexDir="column" justify={"space-between"} align="center" bgColor="gray.100" w="100%" h="100%" color="gray.600" py={28} gap={10}>
            <VStack px={6} w={{base: "90%", md: "70%", lg: "35%"}} gap={4}>
                <Heading  data-aos="fade-right" data-aos-duration="800" data-delay="200"  fontSize={{ base: 16, md: 16, lg: 18 }}>Vamos conversar?</Heading>
                <Text data-aos="fade-left" data-aos-duration="1200" data-delay="400"  fontSize={{base: 12, md: 14, lg: 14}} textAlign="center">
                    Dê o primeiro passo ao seu ritmo. Preencha apenas o que se sentir confortável em partilhar.
                </Text>
            </VStack>

            <Box
                p={4}
                mx="auto"
                as="form"
                maxW="lg"
                bg="white"
                rounded="lg"
                color="black"
                borderWidth="1px"
                borderColor="gray.300"
                onSubmit={handleSubmit}
                w={{base: "22em", md:"lg"}}
                data-aos="fade-up" data-aos-duration="1200"
            >
                <VStack gap={4} align="stretch">
                    {/* Nome */}
                    <Field.Root required>
                        <Field.Label>Nome</Field.Label>
                        <Input
                            value={name}
                            bgColor="gray/3"
                            borderWidth="1px"
                            borderColor="gray.300"
                            placeholder="Digite seu nome"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Field.Root>

                    <Select.Root
                        required
                        color="black"
                        collection={services}
                        onValueChange={(e) => setReason(e.value)}
                    >
                        <Select.HiddenSelect />
                        <Select.Label>Como podemos ajudar? (opcional)</Select.Label>
                        <Select.Control textDecor="none">
                            <Select.Trigger borderWidth="1px" borderColor="gray.300" bgColor="gray/3">
                                <Select.ValueText placeholder="Selecione uma opção, se desejar" />
                            </Select.Trigger>
                            <Select.IndicatorGroup >
                                <Select.Indicator />
                                <Select.ClearTrigger />
                            </Select.IndicatorGroup>
                        </Select.Control>

                        <Portal>
                            <Select.Positioner>
                                <Select.Content
                                    rounded="2xl"
                                    color="gray.200"
                                    fontWeight="bold"
                                    bgColor="gray.700"

                                >
                                    {services.items.map((service) => (
                                        <Select.ItemGroup key={service.label}>
                                            <Select.Item item={service} _hover={{ borderRadius: "xl" }}>
                                                {service.label}
                                                <Select.ItemIndicator />
                                            </Select.Item>
                                        </Select.ItemGroup>
                                    ))}
                                </Select.Content>
                            </Select.Positioner>
                        </Portal>
                    </Select.Root>

                    <Field.Root>
                        <Field.Label>Mensagem (opcional)</Field.Label>
                        <Textarea
                            value={message}
                            bgColor="gray/3"
                            borderWidth="1px"
                            borderColor="gray.300"
                            placeholder="Escreva apenas o que se sentir à vontade para partilhar"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Field.Root>

                    <Field.Root>
                        <Flex gap={2} align="start">
                            <input
                                id="whatsapp-consent"
                                type="checkbox"
                                checked={hasConsent}
                                onChange={(event) => setHasConsent(event.target.checked)}
                                required
                            />
                            <label htmlFor="whatsapp-consent">
                                <Text as="span" fontSize={12} color="gray.600">
                                    Compreendo que, ao continuar, serei direcionado para o WhatsApp para enviar esta mensagem.
                                </Text>
                            </label>
                        </Flex>
                    </Field.Root>

                    <Text fontSize={12} color="gray.600" textAlign="center">
                        Este canal não substitui apoio de emergência. Em caso de perigo imediato, contacte os serviços de emergência da sua área.
                    </Text>

                    <Button
                        size="md"
                        rounded="xl"
                        color="white"
                        type="submit"
                        disabled={!hasConsent}
                        bgColor="blue.600"
                        _hover={{
                            bgColor: "white",
                            color: "blue.600",
                            borderWidth: "1px",
                            borderColor: "blue.600",
                            transition: "0.5s ease-in-out"
                        }}
                    >
                        <Text>Continuar no WhatsApp</Text>
                    </Button>

                </VStack>
            </Box>
        </Flex>
    );
}
