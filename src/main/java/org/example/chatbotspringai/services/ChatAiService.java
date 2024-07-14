package org.example.chatbotspringai.services;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@BrowserCallable
@AnonymousAllowed
public class ChatAiService {
    private ChatClient chatClient;
    public ChatAiService(ChatClient.Builder builder){
        this.chatClient = builder.build();
    }

    public String ragChat(String question){
        return chatClient.prompt()
                .user (question)
                .call()
                .content();
    }
}
